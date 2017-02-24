import sys
reload(sys)
sys.setdefaultencoding('utf8')
from flask import Flask,render_template,request,redirect
import json
import id3
import node
app=Flask(__name__)

@app.route('/')
def index():
	return render_template('i.html')

@app.route('/top250')
def top250():
	return render_template('Top250.html')

@app.route('/top1000')
def top1000():
	return render_template('Top1000.html')

@app.route('/node', methods=['GET','POST'])
def noder():
	if request.method=='POST':
		name=request.json['name']
		l=node.execute(name)
		return json.dumps(l,200,{'ContentType':'application/json'})
	return render_template('nr.html')

@app.route('/recommendation', methods=['GET','POST'])
def recommend():
	if request.method=='POST':
		try:
			like1=request.json['like1']
			like2=request.json['like2']
			like3=request.json['like3']
			dislike1=request.json['dislike1']
			dislike2=request.json['dislike2']
			dislike3=request.json['dislike3']
			d=id3.execute([like1,like2,like3,dislike1,dislike2,dislike3])
			print d
			if len(d)==0:
				d={'hello':"Well, this sucks. ZERO recommended movies :("}
			return json.dumps(d,200,{'ContentType':'application/json'})
		except Exception:
			return "FAIL!"
	return render_template("ar.html")

@app.route('/recommend', methods=['GET','POST'])
def recommend1():
	if request.method=='POST':
		try:
			like1=request.json['like1']
			like2=request.json['like2']
			like3=request.json['like3']
			dislike1=request.json['dislike1']
			dislike2=request.json['dislike2']
			dislike3=request.json['dislike3']
			d=id3.execute([like1,like2,like3,dislike1,dislike2,dislike3])
			print d
			if len(d)==0:
				d={'hello':"Well, this sucks. ZERO recommended movies :("}
			return json.dumps(d,200,{'ContentType':'application/json'})
		except Exception:
			return "FAIL!"
	return render_template("AdvancedRecommendation.html")


if __name__=='__main__':
	app.run(host='0.0.0.0',port=5000,debug=True)