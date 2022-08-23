from marshmallow import Schema, fields

class userSchema(Schema):
    class Meta:
        ordered = True
    id = fields.Str()
    username = fields.Str()
    date_created = fields.Str()
    role = fields.Str()