//import hook useState from react
import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function EditPost({ errors, post }) {

    //define state
    const [nama_project, setNama_project] = useState(post.nama_project);
    const [deskripsi_project, setDeskripsi_project] = useState(post.deskripsi_project);

    //function "updatePost"
    const updatePost = async (e) => {
        e.preventDefault();

        Inertia.put(`/posts/${post.id}`, {
            nama_project: nama_project,
            deskripsi_project: deskripsi_project
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">EDIT POST</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updatePost}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nama Project</label>
                                    <input type="text" className="form-control" value={nama_project} onChange={(e) => setNama_project(e.target.value)} placeholder="Masukkan Judul Post" />
                                </div>
                                {errors.nama_project && (
                                    <div className="alert alert-danger">
                                        {errors.nama_project}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Deskripsi Project</label>
                                    <textarea className="form-control" value={deskripsi_project} onChange={(e) => setDeskripsi_project(e.target.value)} placeholder="Masukkan Judul Post" rows={4}></textarea>
                                </div>
                                {errors.deskripsi_project && (
                                    <div className="alert alert-danger">
                                        {errors.deskripsi_project}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> UPDATE</button>
                                    <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

