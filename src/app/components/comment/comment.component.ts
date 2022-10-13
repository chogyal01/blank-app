import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment/comment.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() id: any;
  @Input() type: string;

  commentForm = this.fb.group({
    comment: ['', Validators.required],
    rating: []
  });
  showValidationErros: boolean = false;

  constructor(private fb: FormBuilder,  private commentService: CommentService) { }

  ngOnInit(): void {
  console.log(this.type)
  }

  onFormSubmit(form: FormGroup) {
    if (!form.valid) {
     this.showValidationErros = true;
     return;
    };
    this.showValidationErros = false;


    console.log(form.value.rating )
    var body = {
      endorsementId: this.id,
      comment: form.value.comment,
      rating: form.value.rating
    }
    switch (this.type) {
      case "endorsement":
        this.commentService.commentEndorsement(body).subscribe(response=>{
          console.log(response)
        })
        break;

      case "petition":
        this.commentService.commentEndorsement(body).subscribe(response=>{
          console.log(response)
        })
        break;

      case "blog":
        this.commentService.commentEndorsement(body).subscribe(response=>{
          console.log(response)
        })
        break;


    }
    form.reset();
  }

}
