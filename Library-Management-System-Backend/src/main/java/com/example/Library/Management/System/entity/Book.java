package com.example.Library.Management.System.entity;

import lombok.Data;
import lombok.NonNull;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

//@Data
@Document(collection = "books")
public class Book {

    @Id
    private ObjectId id;
    @NonNull
    private String name;

    private boolean isIssued;

    private String authorName;
    private Date publishedOnDate;

    private int numberOfPages;

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public @NonNull String getName() {
        return name;
    }

    public void setName(@NonNull String name) {
        this.name = name;
    }

    public boolean isIssued() {
        return isIssued;
    }

    public void setIssued(boolean issued) {
        isIssued = issued;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public Date getPublishedOnDate() {
        return publishedOnDate;
    }

    public void setPublishedOnDate(Date publishedOnDate) {
        this.publishedOnDate = publishedOnDate;
    }

    public int getNumberOfPages() {
        return numberOfPages;
    }

    public void setNumberOfPages(int numberOfPages) {
        this.numberOfPages = numberOfPages;
    }
}
