Javascript best practices

1 - Always Declare Local Variables
    Local variables must be declared with the var keyword or the let keyword, otherwise they will become global variables.

2 - Always Initialize Variables
    It is a good coding practice to initialize variables when you declare them.

    This will:

    - Give cleaner code
    - Provide a single place to initialize variables
    - Avoid undefined values

3 - Declare Objects with "const"
    Declaring objects with const will prevent any accidential change of type.

4 - Don't Use new Object()
    - Use "" instead of new String()
    - Use 0 instead of new Number()
    - Use false instead of new Boolean()
    - Use {} instead of new Object()
    - Use [] instead of new Array()
    - Use /()/ instead of new RegExp()
    - Use function (){} instead of new Function()

5 - Use "===" instead of "=="
    JavaScript uses two different kinds of equality operators: === and !== are the strict equality operators, while ==  and != are the non-strict operators. It is considered best practice to always use strict equality when comparing.

6 - Beware of Automatic Type Conversions
    JavaScript is loosely typed. This means that a variable can contain all data types and because of this it can change it's data type.

7 - Be Careful With "for ... in" Statements
    When looping through items in an object, you might find that you retrieve method functions or other inherited properties as well. In order to work around this, always wrap your code in an if statement which filters with hasOwnProperty.

    for(key in object) {
        if(object.hasOwnProperty(key) {
            ...then do something...
        }
    }

8 - Avoid using excessive if-else statements, 
    Use switch statements instead. This will make easier the debugging process.

9 - End Your Switches with Defaults
    Talking about switch statatements, always end your switch statements with a default. Even if you think there is no need for it.

10 - Avoid Using eval()
    The eval() function is used to run text as code. Because of this, it can have serious security repercussions.