//C program delete at the beginning
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
void display(struct node *head){
    struct node *temp=head;
    printf("The elements in the linked list are:\n");
    while(temp!=NULL){
        printf("%d->",temp->data);
        temp=temp->next;
    }
    printf("NULL");
}
void deleteAtFirst(struct node *head){
    struct node *temp=head;
    head=temp->next;
    display(head);
}

int main(){
    struct node *head=NULL;
    int n,d;
    printf("Enter the no.of.nodes:");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&d);
        insertAtLast(&head,d);
    }
    deleteAtFirst(head);
    return 0;
}
