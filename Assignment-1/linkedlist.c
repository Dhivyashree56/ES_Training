#include <stdio.h>
#include <stdlib.h>
#include "linkedlist.h"
int main(){
    struct node *head=NULL;
    int n,d,val,pos,key;
    printf("Enter the no.of.nodes:\n");
    scanf("%d",&n);
    printf("Enter the elements:\n");
    for(int i=0;i<n;i++){
        scanf("%d",&d);
        insertAtBeginning(&head,d);
    }
    display(head);
    printf("Enter the element to be inserted at last:\n");
    scanf("%d",&d);
    insertAtLast(&head,d);
    display(head);
    printf("Enter the element to be inserted in the middle:\n");
    scanf("%d",&val);
    printf("Enter the position to be inserted:\n");
    scanf("%d",&pos);
    insertAtMiddle(&head,val,pos);
    display(head);
    printf("Delete at first:\n");
    deleteAtFirst(&head);
    display(head);
    printf("Delete at last:\n");
    deleteAtLast(&head);
    display(head);
    printf("Enter the position:\n");
    scanf("%d",&pos);
    deleteAtMiddle(&head,pos);
    display(head);
    printf("Enter the key value to be searched:\n");
    scanf("%d",&key);
    int flag=search(head,key);
    if(flag==0)
        printf("The given element is not present in the linked list");
    else
        printf("The given element is present in the linked list");
    return 0;
}
