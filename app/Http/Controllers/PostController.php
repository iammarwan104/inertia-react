<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get all posts
        $posts = Post::latest()->get();

        //return view
        return inertia('Posts/Index', [
            'posts' => $posts
        ]);
    }

    /**
     * create
     *
     * @return void
     */
    public function create()
    {
        return inertia('Posts/Create');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'nama_project'   => 'required',
            'deskripsi_project' => 'required',
            'gambar_1' => 'required',
        ]);

        //create post
        Post::create([
            'nama_project'     => $request->nama_project,
            'deskripsi_project'   => $request->deskripsi_project,
            'gambar_1'   => $request->gambar_1
        ]);

        //redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Disimpan!');
    }

    /**
     * edit
     *
     * @param  mixed $post
     * @return void
     */
    public function edit(Post $post)
    {
        return inertia('Posts/Edit', [
            'post' => $post,
        ]);
    }

    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $post
     * @return void
     */
    public function update(Request $request, Post $post)
    {
        //set validation
        $request->validate([
            'nama_project'   => 'required',
            'deskripsi_project' => 'required',
            'gambar_1' => 'required',
        ]);

        //update post
        $post->update([
            'nama_project'     => $request->nama_project,
            'deskripsi_project'   => $request->deskripsi_project,
            'gambar_1'   => $request->gambar_1
        ]);

        //redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Diupdate!');
    }

    /**
     * destroy
     *
     * @param  mixed $post
     * @return void
     */
    public function destroy(Post $post)
    {
        //delete post
        $post->delete();

        //redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
