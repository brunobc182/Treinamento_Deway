def is_palindromo(palavra):
	return palavra == palavra[::-1]

def soma_todos(lista):
	return sum(lista)

def quadrado_todos(lista):
	return [x**2 for x in lista]

def numeros_impares(lista):
	return [x for x in lista if x % 2]

def media(lista):
	return sum(lista) / len(lista)