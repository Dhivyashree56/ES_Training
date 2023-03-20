#include <stdlib.h>
#include "linkedlist.h"
void insertAtMiddle(struct node **head,int n,int pos){
    struct node *newNode=(struct node*)malloc(sizeof(struct node));
    newNode->data=n;
    newNode->next=NULL;
    if(*head==NULL){
        *head=newNode;
    }
    struct node *temp=*head;
    for(int i=1;i<pos-1;i++){
        temp=temp->next;
    }
    newNode->next=temp->next;
    temp->next=newNode;
}