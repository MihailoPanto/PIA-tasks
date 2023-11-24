package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.CommentRepo;
import com.example.backend.models.Comment;
import com.example.backend.models.Item;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:4200/")
public class CommentController {
    
    @PostMapping("/item")
    public List<Comment> getItems(@RequestBody Item i){
        return new CommentRepo().getItemComments(i);
    }

    @PostMapping("/add")
    public int addComment(@RequestBody Comment c){
        return new CommentRepo().addComent(c);
    }

    @GetMapping("/all")
    public List<Comment> getAllComments(){
        return new CommentRepo().getAllComments();
    }

    @PostMapping("/accept")
    public int accept(@RequestBody Comment c){
        return new CommentRepo().accept(c);
    }

    @PostMapping("/decline")
    public int decline(@RequestBody Comment c){
        return new CommentRepo().decline(c);
    }

}