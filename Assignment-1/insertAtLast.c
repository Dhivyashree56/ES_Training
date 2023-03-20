#include <stdlib.h>
#include "linkedlist.h"
void insertAtLast(struct node **head,int n){
    struct node *newNode=(struct node*)malloc(sizeof(struct node));
    newNode->data=n;
    newNode->next=NULL;
    struct node *temp=*head;
    if(*head==NULL){
        *head=newNode;
    }
    else{
        while(temp->next!=NULL){
            temp=temp->next;
        }
        temp->next=newNode;
    }
}