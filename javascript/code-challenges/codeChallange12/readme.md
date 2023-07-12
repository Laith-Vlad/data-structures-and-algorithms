# shelter queue 
## Whiteboard Process
![Example Image](./img/Product%20Roadmaps(13).jpg)


## Approach:


 The code implements an AnimalShelter class that simulates an animal shelter operating with a first-in, first-out approach for dogs and cats. It utilizes two separate arrays (dogs and cats) to store the respective animals.

In the enqueue method, an animal is added to the appropriate array based on its species. For dogs, the animal is pushed into the dogs array, and for cats, it is pushed into the cats array.

The dequeue method takes a preference (pref) as an argument. If the preference matches the desired species ("dog" or "cat") and there are animals of that species in the corresponding array, the method removes and returns the first animal in that array using shift(). If the preference doesn't match any available animals or the corresponding array is empty, the method returns null.


## Efficiency:

The time and space complexity of the AnimalShelter class methods can be analyzed as follows:

    Enqueue Method:
        Time Complexity: O(1)
            The enqueue operation has a constant time complexity since it only involves adding an animal to the respective array based on its species.
        Space Complexity: O(1)
            The space complexity is also constant since the enqueue operation does not depend on the number of existing animals.

    Dequeue Method:
        Time Complexity: O(1) (average case) and O(n) (worst case)
            The dequeue operation typically has a constant time complexity since it directly removes and returns the first animal from the respective array based on the preference.
            However, in the worst case scenario, when the preference doesn't match any available animals or the corresponding array is empty, the method may need to search through the entire array to determine this. This would result in a linear time complexity of O(n), where n is the number of animals in the array.
        Space Complexity: O(1)
            The space complexity remains constant as the dequeue operation does not depend on the number of existing animals.
## Solutions 
The AnimalShelter class provides a solution for managing a queue-like system in an animal shelter, where dogs and cats are enqueued and dequeued based on a first-in, first-out approach. The implementation ensures efficient enqueue and dequeue operations, allowing animals to be added and retrieved according to their species preference. The class provides an organized way to manage and retrieve animals from the shelter based on the specified requirements.


***npm test 12test***

Jest will execute the test cases defined in 12 and provide the test results.
npm test 12  will work as expected