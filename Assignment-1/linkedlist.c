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
void deleteAtFirst(struct node **head){
    struct node *temp=*head;
    *head=temp->next;
}
void deleteAtLast(struct node **head){
    struct node *temp=*head;
    while(temp->next->next!=NULL){
        temp=temp->next;
    }
    temp->next=NULL;
}
void deleteAtMiddle(struct node **head,int pos){
    struct node *temp=*head;
    for(int i=1;i<pos-1;i++){
        temp=temp->next;
    }
    temp->next=temp->next->next;
}
int search(struct node *head,int key){
    struct node *temp=head;
    while(temp!=NULL){
        if(temp->data==key)
            return 1;
        temp=temp->next;
    }
    return 0;
}
void display(struct node *head){
    struct node *temp=head;
    printf("The elements in the linked list are:\n");
    while(temp!=NULL){
        printf("%d->",temp->data);
        temp=temp->next;
    }
    printf("NULL\n");
}
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
