import matplotlib.pyplot as plt
import numpy as np

cupcakes = open('CupcakeInvoices.csv')
print("---------------PROBLEM 3---------------")
# print(cupcakes)
# for line in cupcakes:
#     print(line)

print("---------------PROBLEM 4---------------")
# for flavor in cupcakes:
#     flavor = flavor.strip('\r\n').split(',')
#     print(flavor[2])

print("---------------PROBLEM 5---------------")
# for price in cupcakes:
#     price = price.strip('\r\n').split(',')
#     total = float(price[3]) * float(price[4])
#     print(round(total,2))

print("---------------PROBLEM 6---------------")
# grand_total = 0
# for price in cupcakes:
#     price = price.strip('\r\n').split(',')
#     total = float(price[3]) * float(price[4])
#     grand_total += total
# print(round(grand_total,2))

print("---------------PROBLEM 7---------------")

# a_float = 3.14159
# limited_float = round(a_float, 2)
# print(limited_float)

print("---------------GOING FURTHER---------------")

total_choco = 0
total_vanilla = 0
total_strawberry = 0

for line in cupcakes:
    line = line.strip('\r\n').split(',')
    if line[2] == "Chocolate":
        total_choco += float(line[3]) * float(line[4])
    elif line[2] == "Vanilla":
        total_vanilla += float(line[3]) * float(line[4])
    elif line[2] == "Strawberry":
        total_strawberry += float(line[3]) * float(line[4])

total_choco = round(total_choco, 2)
total_strawberry = round(total_strawberry, 2)
total_vanilla = round(total_vanilla, 2)
print(total_choco,total_vanilla,total_strawberry)


# x-coordinates of left sides of bars
flavor_choice = ['Chocolate', 'Vanilla', 'Strawberry']
 
# heights of bars
total_cost = [total_choco,total_strawberry,total_vanilla]
 
# labels for bars
tick_label = ['Chocolate', 'Vanilla', 'Strawberry']
 
# plotting a bar chart
#plt.bar(flavor_choice,total_cost,tick_label,0.8,['brown', 'black', 'pink'])
plt.bar(flavor_choice,total_cost, color=['#964B00', 'black', 'pink'])

# naming the x-axis
plt.xlabel('Flavor')
# naming the y-axis
plt.ylabel('Total income')
# plot title
plt.title('Total Income by Flavor')
 
# function to show the plot
plt.show()

cupcakes.close()