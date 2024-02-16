@r.register_function(docstring='hello(s)')
def hello(s):
    """hello"""
    return s + "world"


Function <hello> has been saved


hello('alice')


aliceworld


r.show_funcs()
