from matplotlib.pyplot import plot
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import DENV_HCV_graphs

def stacked_plots(dict_genes1, dict_mostcommon1, dict_genes2, dict_mostcommon2, dict_genes3, dict_mostcommon3):
#Plots genes alphabetically on x-axis, plots significance on y-axis
#Virus name goes above each graph
#Inputs are outputs of host_factors function
#Highlights most enriched genes

    fig, ax = plt.subplots(3, figsize=(10,7))

    sortedgenes1 = sorted(dict_genes1.keys(), key=lambda x:x.lower())
    sortedsiggenes1 = sorted(dict_mostcommon1.keys(), key=lambda x:x.lower())

    x = list()
    y = list()
    for i, gene in enumerate(sortedgenes1):
        if gene in dict_mostcommon1:
            continue
        x.append(i/len(sortedgenes1))
        y.append(dict_genes1[gene])
    ax[0].scatter(x, y, c = 'grey', s = 10, alpha = 0.5)

    x = list()
    y = list()
    list1 = list()
    for i, gene in enumerate(sortedsiggenes1):
        if gene in dict_mostcommon1:
            x.append(i/len(sortedsiggenes1))
            y.append(dict_mostcommon1[gene])
            list1.append(gene)
    
    for i, gene in enumerate(list1):
        ax[0].annotate(gene, (x[i]-0.01, y[i]+0.3), fontsize = 5)

    ax[0].scatter(x, y, c = 'red', s = 50, alpha = 0.7, label = 'Most Enriched Genes')

    sortedgenes2 = sorted(dict_genes2.keys(), key=lambda x:x.lower())
    sortedsiggenes2 = sorted(dict_mostcommon2.keys(), key=lambda x:x.lower())

    x = list()
    y = list()
    for i, gene in enumerate(sortedgenes2):
        if gene in dict_mostcommon2:
            continue
        x.append(i/len(sortedgenes2))
        y.append(dict_genes2[gene])
    ax[1].scatter(x, y, c = 'grey', s = 10, alpha = 0.5)

    x = list()
    y = list()
    list1 = list()
    for i, gene in enumerate(sortedsiggenes2):
        if gene in dict_mostcommon2:
            x.append(i/len(sortedsiggenes2))
            y.append(dict_mostcommon2[gene])
            list1.append(gene)
    
    for i, gene in enumerate(list1):
        ax[1].annotate(gene, (x[i]-0.01, y[i]+0.3), fontsize = 5)

    ax[1].scatter(x, y, c = 'blue', s = 50, alpha = 0.7, label = 'Most Enriched Genes')

    sortedgenes3 = sorted(dict_genes3.keys(), key=lambda x:x.lower())
    sortedsiggenes3 = sorted(dict_mostcommon3.keys(), key=lambda x:x.lower())

    x = list()
    y = list()
    for i, gene in enumerate(sortedgenes3):
        if gene in dict_mostcommon3:
            continue
        x.append(i/len(sortedgenes3))
        y.append(dict_genes3[gene])
    ax[2].scatter(x, y, c = 'grey', s = 10, alpha = 0.5)

    x = list()
    y = list()
    list1 = list()
    for i, gene in enumerate(sortedsiggenes3):
        if gene in dict_mostcommon3:
            x.append(i/len(sortedsiggenes3))
            y.append(dict_mostcommon3[gene])
            list1.append(gene)

    for i, gene in enumerate(list1):
        ax[2].annotate(gene, (x[i]-0.01, y[i]+0.3), fontsize = 5)

    ax[2].scatter(x, y, c = 'yellow', s = 50, alpha = 0.7, label = 'Most Enriched Genes')
    
    fig.suptitle('Significant Genes for Coronaviruses')
    ax[0].set_ylabel('Significance \n -log(MAGeCK Score)')
    ax[1].set_ylabel('Significance \n -log(MAGeCK Score)')
    ax[2].set_ylabel('Significance \n -log(MAGeCK Score)')

    fig.text(0.52, 0.07, 'Genes (Alphabetically)', ha='center', fontsize = 11)

    for i, virus in enumerate(['SARS-CoV-2', 'HCoV-229E', 'HCoV-Oc43']):
        ax[i].set_title(virus, fontweight = 'bold', fontsize = 11)
        ax[i].get_xaxis().set_visible(False)

    plt.savefig('Coronaviruses_graphs.png')
    plt.show()

def final(f1, f2, f3):
    for f in [f1, f2, f3]:
        if 'CoV2' in f:
            a, dict_genes1, dict_mostcommon1 = DENV_HCV_graphs.host_factors(f)
        if '229E' in f:
            b, dict_genes2, dict_mostcommon2 = DENV_HCV_graphs.host_factors(f)
        if 'OC43' in f:
            c, dict_genes3, dict_mostcommon3 = DENV_HCV_graphs.host_factors(f)
    stacked_plots(dict_genes1, dict_mostcommon1, dict_genes2, dict_mostcommon2, dict_genes3, dict_mostcommon3)



