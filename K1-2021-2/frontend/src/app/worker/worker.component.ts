import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { User } from '../models/User';
import { Comment } from '../models/Comment';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit{
  constructor(private commentService: CommentService, private router: Router){}
  ngOnInit(): void {
    let y = localStorage.getItem("user")
    if(y){
      this.user=JSON.parse(y)
    }
    this.getAllComments()
  }
  user: User = new User()

  logout(){
    this.router.navigate([""]);
  }

  comments: Comment[]=[]
  x:string="Neobradjeno"

  getAllComments(){
    this.commentService.getAll().subscribe(
      data=>{
        if(data){
          this.comments=data
        }
      }
    )
  }

  accept(c:Comment){
    this.commentService.accept(c).subscribe(
      data=>{
        if(data==1){
          alert("Uspesno")
        }
        this.getAllComments()
      }
    )
  }

  decline(c:Comment){
    this.commentService.decline(c).subscribe(
      data=>{
        if(data==1){
          alert("Uspesno")
        }
        this.getAllComments()
      }
    )
  }
}
