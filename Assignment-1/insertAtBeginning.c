//C program to insert at beginning
#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};
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
void display(struct node *head){
    struct node *temp=head;
    printf("The elements in the linked list are:\n");
    while(temp!=NULL){
        printf("%d->",temp->data);
        temp=temp->next;
    }
    printf("NULL");
}
int main(){
    struct node *head=NULL;
    int n,d;
    printf("Enter the no.of.nodes:");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&d);
        insertAtBeginning(&head,d);
    }
    display(head);
    return 0;
}
