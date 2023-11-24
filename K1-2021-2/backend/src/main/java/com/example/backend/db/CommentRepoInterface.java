package com.example.backend.db;

import java.util.List;

import com.example.backend.models.Comment;
import com.example.backend.models.Item;

public interface CommentRepoInterface {

    public List<Comment> getItemComments(Item i);

    public int addComent(Comment c);

    public List<Comment> getAllComments();

    public int accept(Comment c);

    public int decline(Comment c);
}
