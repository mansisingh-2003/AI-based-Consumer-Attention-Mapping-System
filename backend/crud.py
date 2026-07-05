from sqlalchemy.orm import Session

import models
import schemas

from auth import (
    hash_password,
    verify_password,
    create_access_token
)


from sqlalchemy.exc import SQLAlchemyError

def create_user(db: Session, user: schemas.UserCreate):
    try:
        new_user = models.User(
            username=user.username,
            email=user.email,
            password=hash_password(user.password),
            role=user.role
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user

    except SQLAlchemyError as e:
        db.rollback()
        print("DATABASE ERROR:", e)
        raise


def login_user(db: Session, user: schemas.UserLogin):

    db_user = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    if not db_user:
        return {"message": "User not found"}

    if not verify_password(user.password, db_user.password):
        return {"message": "Incorrect password"}

    token = create_access_token(
        {"sub": db_user.email}
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }

def get_users(db: Session):
    return db.query(models.User).all()    

def update_user(db: Session, user_id: int, user: schemas.UserUpdate):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()

    if not db_user:
        return None

    db_user.username = user.username
    db_user.email = user.email
    db_user.role = user.role

    db.commit()
    db.refresh(db_user)

    return db_user

def delete_user(db: Session, user_id: int):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()

    if not db_user:
        return None

    db.delete(db_user)
    db.commit()

    return {"message": "User deleted"}


def create_store(db: Session, store: schemas.StoreCreate):

    new_store = models.Store(
        name=store.name,
        location=store.location,
        manager=store.manager
    )

    db.add(new_store)
    db.commit()
    db.refresh(new_store)

    return new_store


def get_stores(db: Session):
    return db.query(models.Store).all()


def update_store(db: Session, store_id: int, store: schemas.StoreUpdate):

    db_store = db.query(models.Store).filter(
        models.Store.id == store_id
    ).first()

    if not db_store:
        return None

    db_store.name = store.name
    db_store.location = store.location
    db_store.manager = store.manager

    db.commit()
    db.refresh(db_store)

    return db_store


def delete_store(db: Session, store_id: int):

    db_store = db.query(models.Store).filter(
        models.Store.id == store_id
    ).first()

    if not db_store:
        return None

    db.delete(db_store)
    db.commit()

    return {"message": "Store deleted"}

def create_shelf(db: Session, shelf: schemas.ShelfCreate):

    new_shelf = models.Shelf(
        shelf_number=shelf.shelf_number,
        section=shelf.section,
        store_name=shelf.store_name
    )

    db.add(new_shelf)
    db.commit()
    db.refresh(new_shelf)

    return new_shelf


def get_shelves(db: Session):
    return db.query(models.Shelf).all()


def update_shelf(db: Session, shelf_id: int, shelf: schemas.ShelfUpdate):

    db_shelf = db.query(models.Shelf).filter(
        models.Shelf.id == shelf_id
    ).first()

    if not db_shelf:
        return None

    db_shelf.shelf_number = shelf.shelf_number
    db_shelf.section = shelf.section
    db_shelf.store_name = shelf.store_name

    db.commit()
    db.refresh(db_shelf)

    return db_shelf


def delete_shelf(db: Session, shelf_id: int):

    db_shelf = db.query(models.Shelf).filter(
        models.Shelf.id == shelf_id
    ).first()

    if not db_shelf:
        return None

    db.delete(db_shelf)
    db.commit()

    return {"message": "Shelf deleted"}

def create_camera(db: Session, camera: schemas.CameraCreate):
    db_camera = models.Camera(
        camera_number=camera.camera_number,
        location=camera.location,
        shelf_number=camera.shelf_number
    )

    db.add(db_camera)
    db.commit()
    db.refresh(db_camera)

    return db_camera


def get_cameras(db: Session):
    return db.query(models.Camera).all()


def update_camera(db: Session, camera_id: int, camera: schemas.CameraUpdate):
    db_camera = db.query(models.Camera).filter(
        models.Camera.id == camera_id
    ).first()

    if not db_camera:
        return None

    db_camera.camera_number = camera.camera_number
    db_camera.location = camera.location
    db_camera.shelf_number = camera.shelf_number

    db.commit()
    db.refresh(db_camera)

    return db_camera


def delete_camera(db: Session, camera_id: int):
    db_camera = db.query(models.Camera).filter(
        models.Camera.id == camera_id
    ).first()

    if not db_camera:
        return None

    db.delete(db_camera)
    db.commit()

    return {"message": "Camera deleted"}