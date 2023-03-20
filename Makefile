output1: linkedlist.h linkedlist.o insertAtBeginning.o insertAtLast.o insertAtMiddle.o deleteAtFirst.o deleteAtMiddle.o deleteAtLast.o search.o display.o
	gcc -o output linkedlist.h linkedlist.o insertAtBeginning.o insertAtLast.o insertAtMiddle.o deleteAtFirst.o deleteAtMiddle.o deleteAtLast.o search.o display.o
linkedlist.o: linkedlist.c
	gcc -c linkedlist.c
insertAtBeginning.o: insertAtBeginning.c
	gcc -c insertAtBeginning.c
insertAtLast.o: insertAtLast.c
	gcc -c insertAtLast.c
insertAtMiddle.o: insertAtMiddle.c
	gcc -c insertAtMiddle.c
deleteAtFirst.o: deleteAtFirst.c
	gcc -c deleteAtFirst.c
deleteAtMiddle.o: deleteAtMiddle.c
	gcc -c deleteAtMiddle.c
deleteAtLast.o: deleteAtLast.c
	gcc -c deleteAtLast.c
search.o: search.c
	gcc -c search.c
display.o: display.c
	gcc -c display.c
clean:
	del *.o *.exe