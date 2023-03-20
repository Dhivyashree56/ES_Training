#include <stdlib.h>
#include "linkedlist.h"
void deleteAtLast(struct node **head){
    struct node *temp=*head;
    while(temp->next->next!=NULL){
        temp=temp->next;
    }
    temp->next=NULL;
}