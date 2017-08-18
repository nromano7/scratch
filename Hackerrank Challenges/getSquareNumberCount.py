"""
Hackerrank Coding Challenge:
    
Write function 'getSquareNumberCount' that returns an array of integers whos 
elements are the number of square numbers in the inclusive range [a,b].

Created on Thu Aug 17 20:12:27 2017
@author: Nick

"""

import random as rn

# Hackerrank test case
test1 = [2,['3','9'],['17', '24']]
test2 = [1,['2','27']]

# randomized test case
test3 = [[str(rn.randint(0,10)),str(rn.randint(10,50))] for x in range(3)]
test3.insert(0,len(test3))

#########################################
def getSquareNumberCount(arr):
    count = []   
    for n in arr[1:]:
        a = int(n[0])
        b = int(n[1])
        square = [x for x in range(a,b+1) if (x**0.5)%1==0]
        count.append(len(square))
    return count
#########################################
       
# Test 1
print('\nTesting getSquareNumberCount() function.')
res = getMinimumUniqueSum(test1)
print('Result: '+ str(res))
print('Expected Result: [2, 0]');

# Test 2
print('\nTesting getSquareNumberCount() function.')
res = getMinimumUniqueSum(test2)
print('Result: '+ str(res))
print('Expected Result: [4]');

# Test 3
print('\nTesting getSquareNumberCount() function.')
res = getMinimumUniqueSum(test3)
print('Result: '+ str(res))




