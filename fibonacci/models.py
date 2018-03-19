from django.db import models

class Fibonacci(models.Model):
    sl_no = models.IntegerField(primary_key=True, blank=False)
    terms = models.IntegerField()
    result = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'fibonacci'
