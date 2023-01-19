import { TaskService } from "./task.service";
import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { tasksMock } from "../mocks/tasks.mock";
import { taskComments } from "../mocks/comments.mock";
import { environment } from "src/environments/environment";


describe('TaskService (using TestBed)', () => {
  let service: TaskService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const url = environment.url


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TaskService,
        HttpClient
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(TaskService)
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  describe('get tasks', () => {
    const boardId = 1
    const getTasksUrl = url + `board/${boardId}/tasks`

    it('should return tasks for board (called ones)', () => {
      service.getTasks(boardId).subscribe({
        next: tasks => expect(tasks).toEqual(tasksMock),
        error: fail
      })

      const req = httpTestingController.expectOne(getTasksUrl)
      expect(req.request.method).toEqual('GET')

      req.flush(tasksMock);
    })

    it('should return all tasks (called ones)', () => {
      service.getAll().subscribe({
        next: tasks => expect(tasks).toEqual(tasksMock),
        error: fail
      })

      const req = httpTestingController.expectOne(url + 'tasks')
      expect(req.request.method).toEqual('GET')

      req.flush(tasksMock);
    })

  })

  describe('add task', () => {

    it('should return new task (called ones)', () => {
      const task = {
        id: 4,
        createdAt: new Date,
        name: "test 4",
        status: "done",
        boardId: 1
      }

      service.createTask(task).subscribe({
        next: taska => expect(taska).toEqual(task),
        error: fail
      })

      const req = httpTestingController.expectOne(url + 'tasks')
      expect(req.request.method).toEqual('POST')

      req.flush(task);
    })
  });

  describe('edit task', ()=>{
    const status = 'done';
    const taskId = 3;
    const newName = 'my new name'

    it('should return new task status (called ones)', () => {

      service.editTaskStatus(taskId, status).subscribe({
        next: taska => expect(taska.status).toBeTruthy(),
        error: fail
      })

      const req = httpTestingController.expectOne(url +`tasks/${taskId}`)
      expect(req.request.method).toEqual('PATCH')
      expect(req.request.body.status).toEqual(status)

      req.flush(tasksMock[2]);
    })

    it('should return new task name (called ones)', () => {

      service.editTaskName(newName, taskId).subscribe({
        next: taska => expect(taska.name).toBeTruthy(),
        error: fail
      })

      const req = httpTestingController.expectOne(url +`tasks/${taskId}`)
      expect(req.request.method).toEqual('PATCH')
      expect(req.request.body.name).toEqual(newName)

      req.flush(tasksMock[2]);
    })
  })
  describe('delete task (called ones)', ()=>{
    const task = {
      id: 4,
      createdAt: new Date,
      name: "test 4",
      status: "done",
      boardId: 1
    }
    
    it('should return new task status (called ones)', () => {

      service.deleteTask(task).subscribe({
        next: taska => expect(taska).toEqual(task),
        error: fail
      })

      const req = httpTestingController.expectOne(url +`tasks/${task.id}`)
      expect(req.request.method).toEqual('DELETE')

      req.flush(task);
    })

  })
  describe('task`s comments', ()=>{
    
    it('should return task comments (called ones)', () => {
      const taskId = 2

      service.getComments(taskId).subscribe({
        next: comments => expect(comments).toEqual(taskComments),
        error: fail
      })

      const req = httpTestingController.expectOne(url + `tasks/${taskId}/comments`)
      expect(req.request.method).toEqual('GET')

      req.flush(taskComments);
    })

    it('should return new comment (called ones)', () => {
      const taskId = 4;
      const comment = {
        createdAt: new Date,
        text: "new comment to task 4",
        taskId: 4,
        boardId: 1,
        id: 4
      }

      service.commentTask(taskId, comment).subscribe({
        next: comment => expect(comment).toEqual(taskComments[3]),
        error: fail
      })

      const req = httpTestingController.expectOne(url + `comments`)
      expect(req.request.method).toEqual('POST')

      req.flush(taskComments[3]);
    })

    it('should return deleted comment (called ones)', () => {
      const comment = taskComments[3]

      service.deleteComment(comment).subscribe({
        next: commenta => expect(commenta).toEqual(comment),
        error: fail
      })

      const req = httpTestingController.expectOne(url + `comments/${comment.id}`)
      expect(req.request.method).toEqual('DELETE')

      req.flush(taskComments[3]);
    })

  })

})

