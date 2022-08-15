from marshmallow import Schema, fields

class gameSchema(Schema):
    class Meta:
        ordered = True
    game_id = fields.Str()
    title = fields.Str()
    about = fields.Str()
    poster = fields.Str()
    genres = fields.Str()
    release_date = fields.Str()
    developer = fields.Str()
    platform = fields.Str()