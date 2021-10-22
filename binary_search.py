#二分查找
#输入是一个有序的元素列表（必须有序）如果要查找的元素包含在列表中，二分查找返回其位置，否则返回null
def binary_search(list,item):
    low=0
    high=len(list)-1
    while low <= high:
        mid=(low+high)/2
        guess=list[mid]
        if guess == item:
            return mid
        if guess < item:
            low=mid+1
        else: 
            high=mid-1
    return None
my_list = [1,3,5,7,9]
print binary_search(my_list,3)
#print binary_search(my_list,7)

