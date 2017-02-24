def execute(l):
	import sys
	reload(sys)
	sys.setdefaultencoding('utf8')
	from pandas import read_csv
	from sklearn import tree
	from bs4 import BeautifulSoup
	from urllib2 import urlopen

	training=read_csv('trainingset1000.csv',names=['Name','Genre','Director','Cast'])
	upcoming=read_csv('upcoming.csv',names=['Name','Genre','Director','Cast','Image','Trailer'])
	directors_csv=read_csv('directors.csv',names=['0','1','2','3'])
	actors=read_csv('actors.csv',names=['0','1','2','3'])

	names=[i.lower() for i in l]
	genres=[]
	directors=[]
	cast=[]

	for j in names:
		d=True
		for i in range(986):
			if j==training['Name'][i].lower():
				genres.append(training['Genre'][i].split('/')[0])
				directors.append(training['Director'][i].split('/')[0])
				cast.append(training['Cast'][i].split('/')[0])
				d=False
		if(d):
			url=urlopen('https://www.bing.com/search?q={}+movie+imdb'.format('+'.join(j.split())))
			soup=BeautifulSoup(url,'html.parser')
			url.close()
			f=soup.find("div",{"id":"b_content"}).findAll("ol")
			ft=f[0].find('li',{'class':'b_algo'}).div.cite.text
			url=urlopen("https://"+ft)
			soup=BeautifulSoup(url,'html.parser')
			url.close()

			genre_links=soup.find("div",{"class":"subtext"}).findAll("a")
			genre_links=[i.string for i in genre_links[:len(genre_links)-1]]
			genres1='/'.join(genre_links)

			director1=soup.find("span",{"itemprop":"director"}).a.string
			cast1=soup.findAll("span",{"itemprop":"actors"})
			l=2 if len(cast1)>2 else len(cast1)
			cast11='/'.join([cast1[i].a.string for i in range(l)])
			genres.append(genres1.split('/')[0])
			directors.append(director1.split('/')[0])
			cast.append(cast11.split('/')[0])

	genre_={0:['Action','Adult','Adventure','Animation'],1:['Biography','Comedy','Crime','Documentary'],2:['Drama','Family','Fantasy','Film Noir'],3:['Game-Show','History','Horror','Musical'],4:['Music','Mystery','News','Reality-TV'],5:['Romance','Sci-Fi','Short','Sport'],6:['Talk-Show','Thriller','War','Western']}

	#Extracting genre codes for each
	genre_codes=[]
	for i in genres:
		for key,values in genre_.iteritems():
			if i in values:
				genre_codes.append(key)
				break

	#Extracting director codes
	director_codes=[]
	for i in directors:
		flag=True
		for j in range(4):
			if i in directors_csv[str(j)].values:
				director_codes.append(j)
				flag=False
				break
		if(flag):
			director_codes.append(4)

	#Extracting cast codes
	cast_codes=[]
	for i in cast:
		flag=True
		for j in range(4):
			if i in actors[str(j)].values:
				cast_codes.append(j)
				flag=False
				break
		if(flag):
			cast_codes.append(4)

	#Decision Tree Training Set
	clf=tree.DecisionTreeClassifier()
	x=[[genre_codes[i],director_codes[i],cast_codes[i]] for i in range(6)]
	y=[1,1,1,0,0,0]
	clf=clf.fit(x,y)

	#Cross checking through the upcoming movies
	recommended_list=dict()
	count_of_rec=0
	for i in range(68):
		try:
			name=upcoming['Name'][i]
			ugenre=upcoming['Genre'][i].split('/')[0]
			udirector=upcoming['Director'][i].split('/')[0]
			ucast=upcoming['Cast'][i].split('/')[0]
			ugenre_code,udirector_code,ucast_code=0,0,0
			for key,values in genre_.iteritems():
				if ugenre in values:
					ugenre_code=key
					break
			flag=True
			for j in range(4):
				if udirector in directors_csv[str(j)].values:
					udirector_code=j
					flag=False
					break
			if(flag):
				udirector_code=4
			flag=True
			for j in range(4):
				if ucast in actors[str(j)].values:
					ucast_code=j
					flag=False
					break
			if(flag):
				ucast_code=4
			check=clf.predict([[ugenre_code,udirector_code,ucast_code]])
			if check==[1]:
				recommended_list[count_of_rec]=[name,upcoming['Genre'][i],upcoming['Director'][i],upcoming['Cast'][i],upcoming['Image'][i],upcoming['Trailer'][i]]
				count_of_rec+=1
		except:
			continue
	return recommended_list