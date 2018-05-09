import matplotlib.pyplot as plt

def plot(f,g,n):
	plt.plot(n,f,'b',n,g,'r')
	plt.yscale('log')
	plt.grid(True)
	plt.text(max(n), max(f), 'f')
	plt.text(max(n), max(g), 'g')