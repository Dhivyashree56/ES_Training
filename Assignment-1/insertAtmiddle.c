//C program to insert at any position
#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};
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
void insertAtMiddle(struct node *head,int n,int pos){
    struct node *newNode=(struct node*)malloc(sizeof(struct node));
    newNode->data=n;
    newNode->next=NULL;
    if(head==NULL){
        head=newNode;
    }
    struct node *temp=head;
    for(int i=1;i<pos-1;i++){
        temp=temp->next;
    }
    newNode->next=temp->next;
    temp->next=newNode;
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
    int n,d,pos,val;
    printf("Enter the no.of.nodes:");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&d);
        insertAtLast(&head,d);
    }
    printf("Enter the data:");
    scanf("%d",&val);
    printf("Enter the position:");
    scanf("%d",&pos);
    insertAtMiddle(head,val,pos);
    display(head);
    return 0;
}
