#include <stdlib.h>
#include "linkedlist.h"

void insertAtBeginning(struct node **head,int n){
    struct node *newNode=(struct node*)malloc(sizeof(struct node));
    newNode->data=n;
    newNode->next=NULL;
    if(*head==NULL){
        *head=newNode;
    }
    else{
        newNode->next=*head;
        *head=newNode;
    }
}