def superDigit(n,k):
    sum_digit = sum(map(int,list(n))) * k
    print(sum_digit)
    if len(str(sum_digit)) == 1:
        return sum_digit
    else:
        return superDigit(str(sum_digit),1)   
    
    
    
print(superDigit('1234567890',8))    
