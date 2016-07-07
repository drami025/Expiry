file = open('output.txt', 'rb')

for line in file:
    l = line.strip(' \n')
    if l == 'URL':
        continue
    elif l and ':' not in l:
        print '\n'
        print l
    elif l and l[-1] != ':':
        print l


