export const PythonData = [
  //Basic 1
  {
    id: 1.1,
    title: "Introduction",
    details: `Python is a versatile and high-level programming language that has gained immense popularity since its inception. It was created by Guido van Rossum and first released in 1991. The language's design philosophy emphasizes code readability and simplicity, making it an excellent choice for both novice and experienced developers.
            History and Evolution
    Python's development began in the late 1980s, with the first version released in February 1991. Guido van Rossum created Python as a successor to the ABC language, intending to fix its shortcomings while retaining its strengths. Over the years, Python has undergone several major versions, with Python 2.0 released in 2000 and Python 3.0 in 2008. Python 3 introduced significant changes that improved the language's consistency and performance, although it was not backward compatible with Python 2.`,
    code: "",
  },
  {
    id: 1.2,
    title: "Hello World",
    details: "How to print hello world ?",
    code: `print("Hello, World!")

  `,
  },
  {
    id: 1.3,
    title: "Variables",
    details: "How to initialize and print variable value ?",
    code: `# Variables
name = "Alice"
age = 30
height = 5.5

# Print variables
print("Name:", name)
print("Age:", age)
print("Height:", height)

  
    `,
  },
  {
    id: 1.4,
    title: "Basic Arithmetic",
    details: "How to perform  Basic Arithmetic Opertions?",
    code: `# Arithmetic operations
a = 10
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)

  
    `,
  },

  {
    id: 1.5,
    title: "Conditional Statements",
    details: "How to implement Condition Statement (if - elif)?",
    code: `# Conditional statements
number = 10

if number > 0:
    print("The number is positive.")
elif number == 0:
    print("The number is zero.")
else:
    print("The number is negative.")

  
    `,
  },
  {
    id: 1.6,
    title: "Loops",
    details: "How to implement Loops ?",
    code: `
  # Prints all letters except 'e' and 's' 
i = 0
a = 'geeksforgeeks'
  
while i < len(a): 
    if a[i] == 'e' or a[i] == 's': 
        i += 1
        continue
          
    print('Current Letter :', a[i]) 
    i += 1

    `,
  },

  {
    id: 1.7,
    title: "Function Calling",
    details: "How to call the Function ?",
    code: `
 def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")

    `,
  },

  //Number Calculation 2
  {
    id: 2.1,
    title: "Factorial ",
    details: "Find the Factorial of a Number ?",
    code: `
 # Program to find the factorial of a number
num = int(input("enter number "))
factorial = 1

# Check if the number is negative, positive, or zero
if num < 0:
    print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
    print("The factorial of 0 is 1")
else:
    for i in range(1, num + 1):
        factorial *= i
    print('Factorial of ',num , factorial)


    `,
  },

  {
    id: 2.2,
    title: "Prime Number ",
    details: "Check if a Number is Prime ?",
    code: `
# Program to check if a number is prime or not
num = int(input("enter number"))

# To take input from the user
# num = int(input("Enter a number: "))

# Define a flag variable
flag = False

# Prime numbers are greater than 1
if num > 1:
    # Check for factors
    for i in range(2, int(num/2)+1):
        if (num % i) == 0:
            # If factor is found, set flag to True
            flag = True
            # Break out of loop
            break

# Check if flag is True
if flag:
    print(num , 'is not a prime number')
else:
    print(num,'is a prime number')


    `,
  },
];
