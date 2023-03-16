output: linkedlist.o
	gcc -o output linkedlist.o
linkedlist.o: linkedlist.c
	gcc -c linkedlist.c
output1: insertAtBeginning.o insertAtLast.o insertAtMiddle.o deleteAtFirst.o deleteAtmiddle.o deleteLast.o search.o
	gcc -o output insertAtBeginning.o insertAtLast.o insertAtMiddle.o deleteAtFirst.o deleteAtmiddle.o deleteLast.o search.o
insertAtBeginning.o: insertAtBeginning.c
	gcc -c insertAtBeginning.c
insertAtLast.o: insertAtLast.c
	gcc -c insertAtLast.c
insertAtMiddle.o: insertAtMiddle.c
	gcc -c insertAtMiddle.c
deleteAtFirst.o: deleteAtFirst.c
	gcc -c deleteAtFirst.c
deleteAtmiddle.o: deleteAtmiddle.c
	gcc -c deleteAtmiddle.c
deleteLast.o: deleteLast.c
	gcc -c deleteLast.c
search.o: search.c
	gcc -c search.c
clean:
	del *.o output