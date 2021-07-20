import matplotlib.pyplot as plt
from matplotlib.pyplot import plot
import numpy as np
import pandas as pd

def comparo(f1, f2, collumn_name):
    df1 = pd.read_csv(f1, sep = '\t')
    df2 = pd.read_csv(f2, sep = '\t')
    l1 = list()
    l2 = list()

    df1 = df1.set_index('id')
    df1 = df1.to_dict(orient = 'index')
    df2 = df2.set_index('id')
    df2 = df2.to_dict(orient = 'index')

    for key in df1:
        if key not in df2:
            continue
        l1.append(df1[key][collumn_name])
        l2.append(df2[key][collumn_name])
    return l1,l2

def ratio(l1, l2):
    assert len(l1) == len(l2)
    count = 0
    for i in range(len(l1)):
            if 0.9 <= float(l1[i])/float(l2[i]) <= 1.1:
                count += 1
    return(count, len(l1))

def final_comparison(f1, f2, collumn_name):
    l1, l2 = comparo(f1, f2, collumn_name)
    count, total = ratio(l1, l2)

    fig, ax = plt.subplots()
    ax.scatter(l1, l2, c = 'blue', s = 50, alpha = 0.7)
    
    a = 'HAV'

    ax.set_xlabel("Pipeline" + a + ' pos|score')
    ax.set_ylabel("Andreas' " + a + ' pos|score')
    ax.set_title('Comparing ' + a + ' pos|score')

    props = dict(boxstyle='round', facecolor='wheat', alpha=0.5)

    ax.text(0.02, 0.97, str(count) + '/' + str(total), transform=ax.transAxes, fontsize=7, verticalalignment='top', bbox=props)    

    plt.savefig(a + '_comparisons.jpg')

    plt.show()
