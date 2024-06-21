<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function project()
    {
        return $this->belongsTo(Project::class,);
    }

    public function assignedUser()
    {
        return $this->belongsTo(User::class, 'assigned_user_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(Project::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Project::class, 'updated_by');
    }
}
