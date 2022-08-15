from sqlalchemy import create_engine, select
from sqlalchemy.orm import declarative_base, Session

class DBSession:
    Base = declarative_base()
    engine = create_engine('sqlite:///gbdb')
    session = Session(engine)
