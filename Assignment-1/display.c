#include <stdio.h>
#include <stdlib.h>
#include "linkedlist.h"
void display(struct node *head){
    struct node *temp=head;
    printf("The elements in the linked list are:\n");
    while(temp!=NULL){
        printf("%d->",temp->data);
        temp=temp->next;
    }
    printf("NULL\n");
}