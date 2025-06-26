

def enc(x,n):
    position = (x+n) % 26
    return position


if __name__ == "__main__":
    shift = int(input("Enter the shift value: "))
    pos = enc(4, shift)
    print(f"Position after shifting: {pos}")
    
