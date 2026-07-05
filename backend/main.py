from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from auth import check_role
from roles import *

import models
import schemas
import crud

from database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Consumer Attention Mapping System",
    description="Backend API",
    version="1.0.0"
)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "Welcome to Consumer Attention Mapping System",
        "status": "Backend Running Successfully"
    }


@app.post("/users")
def create_user(
    user: schemas.UserCreate,
    db: Session = Depends(get_db)
):
    return crud.create_user(db, user)


@app.post("/login")
def login(
    user: schemas.UserLogin,
    db: Session = Depends(get_db)
):
    return crud.login_user(db, user)

@app.get("/admin")

def admin_panel():

    check_role(
        "admin",
        [ADMIN]
    )

    return {
        "message": "Welcome Admin"
    }
    
@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    return crud.get_users(db)    

@app.put("/users/{user_id}")
def update_user(
    user_id: int,
    user: schemas.UserUpdate,
    db: Session = Depends(get_db)
):
    return crud.update_user(db, user_id, user)

@app.delete("/users/{user_id}")
def delete_user(
    user_id: int,
    db: Session = Depends(get_db)
):
    return crud.delete_user(db, user_id)

@app.post("/stores")
def create_store(
    store: schemas.StoreCreate,
    db: Session = Depends(get_db)
):
    return crud.create_store(db, store)


@app.get("/stores")
def get_stores(
    db: Session = Depends(get_db)
):
    return crud.get_stores(db)


@app.put("/stores/{store_id}")
def update_store(
    store_id: int,
    store: schemas.StoreUpdate,
    db: Session = Depends(get_db)
):
    return crud.update_store(db, store_id, store)


@app.delete("/stores/{store_id}")
def delete_store(
    store_id: int,
    db: Session = Depends(get_db)
):
    return crud.delete_store(db, store_id)

@app.post("/shelves")
def create_shelf(
    shelf: schemas.ShelfCreate,
    db: Session = Depends(get_db)
):
    return crud.create_shelf(db, shelf)


@app.get("/shelves")
def get_shelves(
    db: Session = Depends(get_db)
):
    return crud.get_shelves(db)


@app.put("/shelves/{shelf_id}")
def update_shelf(
    shelf_id: int,
    shelf: schemas.ShelfUpdate,
    db: Session = Depends(get_db)
):
    return crud.update_shelf(db, shelf_id, shelf)


@app.delete("/shelves/{shelf_id}")
def delete_shelf(
    shelf_id: int,
    db: Session = Depends(get_db)
):
    return crud.delete_shelf(db, shelf_id)

@app.post("/cameras")
def create_camera(
    camera: schemas.CameraCreate,
    db: Session = Depends(get_db)
):
    return crud.create_camera(db, camera)


@app.get("/cameras")
def get_cameras(
    db: Session = Depends(get_db)
):
    return crud.get_cameras(db)


@app.put("/cameras/{camera_id}")
def update_camera(
    camera_id: int,
    camera: schemas.CameraUpdate,
    db: Session = Depends(get_db)
):
    return crud.update_camera(db, camera_id, camera)


@app.delete("/cameras/{camera_id}")
def delete_camera(
    camera_id: int,
    db: Session = Depends(get_db)
):
    return crud.delete_camera(db, camera_id)