def execute(s):
	import sys
	reload(sys)
	sys.setdefaultencoding('utf8')
	from pandas import read_csv
	training=read_csv('upcoming.csv',names=['Name','Genre','Director','Cast','Image','Trailer'])
	name=s
	name=name.lower()
	genre=[]
	for i in range(68):
		if name==training['Name'][i].lower():
			genre.append(training['Genre'][i].split('/')[0])
			genre.append(training['Director'][i].split('/')[0])
			genre.append(training['Cast'][i].split('/')[0])
			genre.append(training['Image'][i])
			genre.append(training['Trailer'][i])
			break
	g=dict()
	g[0]=[name, genre[0],genre[1],genre[2],genre[3],genre[4]]
	j=1
	for i in range(68):
		if genre[0]==training['Genre'][i].split('/')[0] and name!=training['Name'][i].lower():
			g[j]=[training['Name'][i],training['Genre'][i],training['Director'][i],training['Cast'][i],training['Image'][i],training['Trailer'][i]]
			j+=1
	return g