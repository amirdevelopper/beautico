class WishSessionManager:
    def __init__(self, request):
        self.request = request
        self.session = request.session

    def get_wish(self, user):
        key = f"wish_{user.id}"
        return self.session.get(key, [])

    def set_wish(self, user, wish_list):
        key = f"wish_{user.id}"
        self.session[key] = wish_list
        self.session.modified = True

    def add_wish(self, user, wish_item):
        wishes = self.get_wish(user)
        if wish_item not in wishes:
            wishes.append(wish_item)
            self.set_wish(user, wishes)

    def remove_wish(self, user, wish_item):
        wishes = self.get_wish(user)
        if wish_item in wishes:
            wishes.remove(wish_item)
            self.set_wish(user, wishes)
