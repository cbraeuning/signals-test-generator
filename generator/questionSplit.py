import PyPDF2
from StringIO import StringIO
import math
import os

content = ""
path = "T1-3300spring16ans.pdf"
files = [f for f in os.listdir('/Users/collin/Desktop/testing') if os.path.isfile(f)]
files = [f for f in files if f.startswith('T')]

for testFile in files:
	print(testFile)
	test = PyPDF2.PdfFileReader(open(testFile,"rb"))
	testFile = "../questions/" + testFile.replace(".pdf","").replace("3300","").replace("ans","")
	if not os.path.exists(testFile):
		os.makedirs(testFile)
	numPages = test.getNumPages()
	for i in range(numPages):
		output1 = PyPDF2.PdfFileWriter()
		output2 = PyPDF2.PdfFileWriter()
		output3 = PyPDF2.PdfFileWriter()
		output4 = PyPDF2.PdfFileWriter()
		if i==1:
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),520)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),360)
			output1.addPage(q)
			outputStream = file(testFile + "/1.pdf", "wb")
			output1.write(outputStream)
	
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),360)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),10)
			output2.addPage(q)
			outputStream = file(testFile + "/2.pdf", "wb")
			output2.write(outputStream)
		elif i==2:
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),840)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),660)
			output1.addPage(q)
			outputStream = file(testFile + "/3.pdf", "wb")
			output1.write(outputStream)
	
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),660)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),510)
			output2.addPage(q)
			outputStream = file(testFile + "/4.pdf", "wb")
			output2.write(outputStream)

			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),510)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),360)
			output3.addPage(q)
			outputStream = file(testFile + "/5.pdf", "wb")
			output3.write(outputStream)
	
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),360)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),190)
			output4.addPage(q)
			outputStream = file(testFile + "/6.pdf", "wb")
			output4.write(outputStream)
		elif i==3:
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),840)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),660)
			output1.addPage(q)
			outputStream = file(testFile + "/7.pdf", "wb")
			output1.write(outputStream)
	
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),660)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),510)
			output2.addPage(q)
			outputStream = file(testFile + "/8.pdf", "wb")
			output2.write(outputStream)

			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),510)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),360)
			output3.addPage(q)
			outputStream = file(testFile + "/9.pdf", "wb")
			output3.write(outputStream)
	
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),360)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),190)
			output4.addPage(q)
			outputStream = file(testFile + "/10.pdf", "wb")
			output4.write(outputStream)
		elif i==4:
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),790)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),650)
			output1.addPage(q)
			outputStream = file(testFile + "/11.pdf", "wb")
			output1.write(outputStream)
	
			q = test.getPage(i)
			q.mediaBox.upperRight = (q.mediaBox.getLowerRight_x(),650)
			q.mediaBox.lowerRight = (q.mediaBox.getLowerRight_x(),500)
			output2.addPage(q)
			outputStream = file(testFile + "/12.pdf", "wb")
			output2.write(outputStream)
	



