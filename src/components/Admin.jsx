import React, { useState } from 'react';
import { Upload, Plus, Save } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    detailedDescription: '',
    scale: '',
    image: null
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "chemsetu_preset");
    data.append("cloud_name", "YOUR_CLOUD_NAME");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", {
        method: "POST",
        body: data
      });
      const uploadedImage = await res.json();
      return uploadedImage.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';

      if (formData.image) {
        imageUrl = await uploadToCloudinary(formData.image);
      }

      await addDoc(collection(db, "compounds"), {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        detailedDescription: formData.detailedDescription,
        scale: formData.scale,
        image: imageUrl,
        createdAt: new Date()
      });

      alert('Compound added successfully!');
      setFormData({
        name: '',
        category: '',
        description: '',
        detailedDescription: '',
        scale: '',
        image: null
      });
      setPreview(null);

    } catch (error) {
      console.error('Error:', error);
      alert('Error saving data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-100 p-3 rounded-full">
            <Plus className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Add New Compound</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-slate-700 mb-2">Product Image</label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors relative">
              <input 
                type="file" 
                onChange={handleImageChange} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
              />
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-48 mx-auto rounded-lg shadow-sm" />
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="w-10 h-10 text-slate-400 mb-2" />
                  <p className="text-slate-500 text-sm">Click to upload image</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Compound Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
              <input 
                type="text" 
                name="category" 
                value={formData.category} 
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Short Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none h-24"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Detailed Technical Description</label>
            <textarea 
              name="detailedDescription" 
              value={formData.detailedDescription} 
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none h-40"
              placeholder="Enter full technical specifications, process details, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Scale / Capacity</label>
            <input 
              type="text" 
              name="scale" 
              value={formData.scale} 
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
          >
            {loading ? 'Saving...' : (
              <>
                <Save className="w-5 h-5" />
                Save Compound
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
