import { useState } from "react";
import { Button } from "@/components/shadcn/ui/button";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import axios from "axios";
import toast from "react-hot-toast";

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Create image preview
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(image);

    if (!image) {
      toast("select a image to upload");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://goldlync.softvencefsd.xyz/api/company-information/create",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.error("Image uploaded successfully!");
      setImage(null);
      setPreview(null);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-4">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="image">Upload Image</Label>
            <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {preview && (
            <div className="flex justify-center">
              <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-md" />
            </div>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Uploading..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ImageUploadForm;