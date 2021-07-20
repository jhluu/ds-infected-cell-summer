import matplotlib.pyplot as plt
from matplotlib.pyplot import plot
import numpy as np
import pandas as pd
from collections import Counter

def host_factors(f1):
#Finds the 30 genes with the highest significance (-log(neg_score))
#Outputs 3 things:
# 1) virus name,
# 2) dictionary whose keys are all the genes and whose values are significance,
# 3) dictionary whose keys are the 30 most enriched genes and whose values are signifcance

    dict_genes = {}
    df1  = pd.read_csv(f1, sep = '\t')
    df1 = df1.set_index('id')
    df1 = df1.to_dict(orient = 'index')
    for key in df1:
        dict_genes[key] = -np.log(df1[key]['neg|score'])
    k = Counter(dict_genes)
    dict_mostcommon = dict(k.most_common(30))

    list3 = ['DENV', 'HCV', 'OC43', '229E', 'CoV2']
    
    if list3[0] in f1:
        a = list3[0]
    if list3[1] in f1:
        a = list3[1]
    if list3[2] in f1:
        a = 'HCoV-OC43'
    if list3[3] in f1:
        a = 'CoV-229E'
    if list[4] in f1:
        a = 'SARS-CoV2'

    return a, dict_genes, dict_mostcommon

def sig_alpha(a, dict_genes, dict_mostcommon):
#Plots genes alphabetically on the x-axis
#Plots significance on the y-axis
#Highlights the 30 most significant genes

    fig, ax = plt.subplots()
    sortedgenes = sorted(dict_genes.keys(), key=lambda x:x.lower())
    sortedsiggenes = sorted(dict_mostcommon.keys(), key=lambda x:x.lower())

    x = list()
    y = list()
    for i, gene in enumerate(sortedgenes):
        if gene in dict_mostcommon:
            continue
        x.append(i/len(sortedgenes))
        y.append(dict_genes[gene])
    ax.scatter(x, y, c = 'grey', s = 10, alpha = 0.5)

    x = list()
    y = list()
    list1 = list()
    for i, gene in enumerate(sortedsiggenes):
        if gene in dict_mostcommon:
            x.append(i/len(sortedsiggenes))
            y.append(dict_mostcommon[gene])
            list1.append(gene)
    ax.scatter(x, y, c = 'red', s = 50, alpha = 0.7, label = 'Most Enriched Genes')

    for i, gene in enumerate(list1):
        plt.text(x[i]-0.01, y[i]+0.3, gene, fontsize = 5)
    
    ax.set_xticklabels([])
    ax.set_xlabel('Genes (Alphabetically)')
    ax.set_ylabel('Significance (-log(MAGeCK Score))')
    ax.set_title(a+  ' host factors (CRISPR screen)')
    plt.legend(loc="upper left")

    plt.savefig(a+ '_host_factors.png')
    plt.show()

def final_sig_alpha(f1):
    a, dict_genes, dict_mostcommon, = host_factors(f1)
    sig_alpha(a, dict_genes, dict_mostcommon)

def sig_location():
    pass
    #Plots significance on the y-axis and location of gene on the x-axis.

def test(HCV_mostcommon, DENV_mostcommon):
#Tests if HCV and DENV share any of their 30 most significant genes

    for gene in HCV_mostcommon:
        if gene in DENV_mostcommon:
            print('error!!!')
    for gene in DENV_mostcommon:
        if gene in HCV_mostcommon:
            print('error!!!')
    else:
        print('ok')
    

def DENV_sig_rank(DENV_mostcommon, HCV_mostcommon, f1):
#Plots the most enriched genes of DENV in blue and the most enriched genes of HCV in red, plots shared significant genes in purple
#Plots gene rank on x-axis and significance on y-axis

    fig, ax = plt.subplots()

    df1  = pd.read_csv(f1, sep = '\t')
    df1 = df1.set_index('id')
    df1 = df1.to_dict(orient = 'index')

    dict1 = DENV_mostcommon.copy()
    dict2 = HCV_mostcommon.copy()

    repeated = list()
    for gene in dict1:
        if gene in dict2:
            repeated.append(gene)
            del DENV_mostcommon[gene]

    for gene in dict2:
        if gene in dict1:
            repeated.append(gene)
            del HCV_mostcommon[gene]

    w = list()
    z = list()
    for gene in repeated:
        w.append(df1[gene]['neg|rank'])
        z.append(-np.log(df1[gene]['neg|score']))
    ax.scatter(w, z, c = 'purple', s = 50, alpha = 0.7, label = 'Shared host factors')

    dhcv_rank = dict()
    ddenv_rank = dict()
    dhcv_sig = dict()

    for gene in HCV_mostcommon:
        dhcv_rank[gene] = df1[gene]['neg|rank']
        dhcv_sig[gene] = -np.log(df1[gene]['neg|score'])
    for gene in DENV_mostcommon:
        ddenv_rank[gene] = df1[gene]['neg|rank']

    x = list()
    y = list()
    for gene in HCV_mostcommon:
        x.append(dhcv_rank[gene])
        y.append(dhcv_sig[gene])
    ax.scatter(x, y, c = 'red', s = 50, alpha = 0.7, label = 'HCV host factors')

    x = list()
    y = list()
    for gene in DENV_mostcommon:
        x.append(ddenv_rank[gene])
        y.append(DENV_mostcommon[gene])
    ax.scatter(x, y, c = 'blue', s = 50, alpha = 0.7, label = 'DENV host factors')

    ax.set_xlabel('Gene Rank')
    ax.set_ylabel('Significance (-log(MAGeCK Score))')
    ax.set_title('DENV CRISPR screen')
    plt.legend(loc="upper right")

    plt.savefig('DENV_sig_rank.png')
    plt.show()

def final_DENV(f1, f2):
    a, d1, DENV_mostcommon = host_factors(f1)
    b, d2, HCV_mostcommon = host_factors(f2)
    DENV_sig_rank(DENV_mostcommon, HCV_mostcommon, f1)

def HCV_sig_rank(DENV_mostcommon, HCV_mostcommon, f2):
    fig, ax = plt.subplots()

    df2  = pd.read_csv(f2, sep = '\t')
    df2 = df2.set_index('id')
    df2 = df2.to_dict(orient = 'index')

    dict1 = DENV_mostcommon.copy()
    dict2 = HCV_mostcommon.copy()

    repeated = list()
    for gene in dict1:
        if gene in dict2:
            repeated.append(gene)
            del DENV_mostcommon[gene]

    for gene in dict2:
        if gene in dict1:
            repeated.append(gene)
            del HCV_mostcommon[gene]

    w = list()
    z = list()
    for gene in repeated:
        w.append(df2[gene]['neg|rank'])
        z.append(-np.log(df2[gene]['neg|score']))
    ax.scatter(w, z, c = 'purple', s = 50, alpha = 0.7, label = 'Shared host factors')

    dhcv_rank = dict()
    ddenv_rank = dict()
    ddenv_sig = dict()

    for gene in HCV_mostcommon:
        dhcv_rank[gene] = df2[gene]['neg|rank']
    for gene in DENV_mostcommon:
        ddenv_rank[gene] = df2[gene]['neg|rank']
        ddenv_sig[gene] = -np.log(df2[gene]['neg|score'])

    x = list()
    y = list()
    for gene in HCV_mostcommon:
        x.append(dhcv_rank[gene])
        y.append(HCV_mostcommon[gene])
    ax.scatter(x, y, c = 'red', s = 50, alpha = 0.7, label = 'HCV host factors')

    x = list()
    y = list()
    for gene in DENV_mostcommon:
        x.append(ddenv_rank[gene])
        y.append(ddenv_sig[gene])
    ax.scatter(x, y, c = 'blue', s = 50, alpha = 0.7, label = 'DENV host factors')

    ax.set_xlabel('Gene Rank')
    ax.set_ylabel('Significance (-log(MAGeCK Score))')
    ax.set_title('HCV CRISPR screen')
    plt.legend(loc="upper right")

    plt.savefig('HCV_sig_rank.png')
    plt.show()

    #Plots significance on the y-axis and pos_rank on the x-axis.
    # HCV host factors in red, DENV host factors in blue.

def final_HCV(f1, f2):
    a, d1, DENV_mostcommon = host_factors(f1)
    b, d2, HCV_mostcommon = host_factors(f2)
    HCV_sig_rank(DENV_mostcommon, HCV_mostcommon, f2)


