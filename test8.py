print(100 + 200)

# name = input('请输入你想输入的:')  #输入
# print(name)

print("我是\"123")  #转义


print('周 \n杰伦')
#使用'''  ... =可以美观换行
print('''1      
...2
...3''')

lists = ['a','b','c']   #获取数组 个数
print(len(lists))

lists.insert(1,'a2')  #插入数据到某个数组位置
print((lists))

lists.pop()  #删除数组末尾的元素
print((lists))

lists.pop(2)  #删除数组指定位置元素
print((lists))

lists[0] = 'a1' #替换指定数据元素
print((lists))

s = ('a','b','c','d')    #tuple，和数组类似，只是这个无法修改,一旦初始化就不能修改
print(s[1])

age = 20
if age >= 18:
    print('我大于或等于18额')
else:
    print('小于18')