import { Component,OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/Comment';
import { User } from '../models/User';

@Component({
  selector: 'app-customer-second',
  templateUrl: './customer-second.component.html',
  styleUrls: ['./customer-second.component.css']
})
export class CustomerSecondComponent implements OnInit{

  constructor(private commentService: CommentService){}
  ngOnInit(): void {
    let x = localStorage.getItem("item")
    let y = localStorage.getItem("user")
    if(x){
      this.item=JSON.parse(x)
    }
    if(y){
      this.user=JSON.parse(y)
    }
    this.getComments()
  }

  item: Item = new Item();
  comments: Comment[] = []
  comment: Comment = new Comment
  user: User = new User()
  errorMsg :string=""

  getComments(){
    this.commentService.getComments(this.item).subscribe(
      data=>{
        if(data){
          this.comments = data;
        }
      }
    )
  }

  addComment(){
    if(!this.comment.text){
      this.errorMsg="Unesite komentar"
      return
    }
    this.comment.user=this.user.username
    this.comment.item=this.item.name
    this.comment.state="Neobradjeno"
    this.commentService.addComment(this.comment).subscribe(
      data=>{
        if(data==1){
          this.getComments()
          alert("Dodat komentar")
        }
      }
    )

  }

}
