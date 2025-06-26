

def enc(plain_position, n_of_shifts):
    position = (plain_position + n_of_shifts) % 26
    return position


if __name__ == "__main__":
    shift = int(input("Enter the shift value: "))
    pos = enc(4, shift)
    print(f"Position after shifting: {pos}")
    
