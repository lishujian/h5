print(100 + 200)

# name = input('请输入你想输入的:')  #输入
# print(name)

print("我是\"123")  #转义

print('周 \n杰伦')
#使用'''  ... =可以美观换行
print('''1      
...2
...3''')

lists = ['a','b','c']   #获取数组 个数，列表就是平时说的数组
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

dlist = ['aa','bb','cc','dd']   #for 循环
for i in dlist:
    print(i)

sum = 0              
for x in range(101):  #for 循环实现相加
    sum = sum + x
    print(sum)

demo = 10     #while 循环
while demo > 5:
    demo = demo -1
    print(demo)

demo1 = 10    #break 跳出循环
while demo1 >4:
    demo1 = demo1 - 1
    if demo1 < 7:
        print(demo1)
        break
    print(demo1)

print('分割线-----------')
demo2 = 20
while demo2 > 2:
    demo2 = demo2 -1    
    if demo2 %2 == 0:
        continue
    print(demo2)

demo3 = {'name':'周杰伦',age: 27}  # 字典，平时说的对象

print(demo3['name'])
print(demo3. get('name')) 
print(demo3. get('name11'))    #没有找到会返回None

sk = [1,2,3,4,5]   #调用多个参数
def adds(*list):
    for x in list:
        print(x)

adds(*sk)

#关键字参数
def demo4(name,age,**kw):
    print('name:',name,'age:',age,'other:',kw)

demo4('周杰伦',35)
demo4('周杰伦',35,true='flase')

#切片
list1 = ['a','b','c','d','e']

print(list1[1:3])

list2 = {'a':1,'b':2,'c':3,'d':4}

for i in list2:
    print(list2[i])

for i in range(10,15):
    print(i)























    