import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Collapse,
  IconButton,
  TextField,
  Switch,
  Tooltip,
} from '@mui/material';
import { ExpandMore, ExpandLess, Star, StarBorder } from '@mui/icons-material';
import Image from 'next/image';

// Mock user and token data
const user = {
  name: 'icealertdevice',
  avatar: '',
  tokens: 58,
};

// Mock jobs data
const mockJobs = [
  {
    id: 'e3ecc04e...',
    created: 'Wed, Jan 22, 2025, 4:57 PM CST',
    images: 3,
    status: 'completed',
    imagesData: [
      {
        id: 'img1',
        url: '/mock1.jpg',
        timestamp: 'Mar 8, 2006, 01:50 PM',
        customNumber: '12345',
        quantity: 2,
        retailPrice: 100,
        marketPrice: 80,
        lastSoldFor: 90,
      },
      {
        id: 'img2',
        url: '/mock2.jpg',
        timestamp: 'Mar 8, 2006, 01:48 PM',
        customNumber: '',
        quantity: 1,
        retailPrice: 120,
        marketPrice: 95,
        lastSoldFor: 110,
      },
      {
        id: 'img3',
        url: '/mock3.jpg',
        timestamp: 'Mar 8, 2006, 01:47 PM',
        customNumber: '67890',
        quantity: 4,
        retailPrice: 200,
        marketPrice: 150,
        lastSoldFor: 180,
      },
    ],
  },
  {
    id: '3830d58e...',
    created: 'Wed, Jan 22, 2025, 4:54 PM CST',
    images: 3,
    status: 'completed',
    imagesData: [
      {
        id: 'img4',
        url: '/mock1.jpg',
        timestamp: 'Mar 8, 2006, 01:50 PM',
        customNumber: '',
        quantity: 1,
        retailPrice: 90,
        marketPrice: 70,
        lastSoldFor: 85,
      },
      {
        id: 'img5',
        url: '/mock2.jpg',
        timestamp: 'Mar 8, 2006, 01:48 PM',
        customNumber: '54321',
        quantity: 2,
        retailPrice: 110,
        marketPrice: 100,
        lastSoldFor: 105,
      },
      {
        id: 'img6',
        url: '/mock3.jpg',
        timestamp: 'Mar 8, 2006, 01:47 PM',
        customNumber: '',
        quantity: 3,
        retailPrice: 130,
        marketPrice: 120,
        lastSoldFor: 125,
      },
    ],
  },
];

const AuctioneerAI: React.FC = () => {
  // Upload section state
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [generateRetail, setGenerateRetail] = useState(false);
  const [generateMarket, setGenerateMarket] = useState(false);
  const [generateLastSold, setGenerateLastSold] = useState(false);

  // Jobs and images state
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [starredImages, setStarredImages] = useState<Record<string, boolean>>({});
  const [customPercents, setCustomPercents] = useState<Record<string, number>>({});
  const [starredOnly, setStarredOnly] = useState(false);

  // Handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleExpandJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleStarImage = (imgId: string) => {
    setStarredImages((prev) => ({ ...prev, [imgId]: !prev[imgId] }));
  };

  const handlePercentChange = (imgId: string, value: number) => {
    setCustomPercents((prev) => ({ ...prev, [imgId]: value }));
  };

  // Subcomponents
  const Header = () => (
    <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <Avatar>{user.name[0].toUpperCase()}</Avatar>
        <div>
          <Typography variant="subtitle1" className="font-semibold">{user.name}</Typography>
          <Typography variant="body2" color="textSecondary">Welcome back!</Typography>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-blue-600 font-semibold">{user.tokens}</span>
        <span className="text-gray-500">tokens</span>
      </div>
    </div>
  );

  const UploadSection = () => (
    <Paper className="p-6 mb-8" elevation={2}>
      <Typography variant="h6" className="mb-4 font-bold">Upload Images</Typography>
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <Button
          variant="contained"
          component="label"
          className="w-full md:w-auto"
          aria-label="Choose files to upload"
        >
          Choose Files
          <input
            type="file"
            hidden
            multiple
            onChange={handleFileChange}
            aria-label="File input"
          />
        </Button>
        <span className="text-gray-500">{selectedFiles.length > 0 ? `${selectedFiles.length} file(s) selected` : 'No file chosen'}</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <FormControlLabel
          control={<Checkbox checked={generateRetail} onChange={e => setGenerateRetail(e.target.checked)} inputProps={{ 'aria-label': 'Generate Retail Value' }} />}
          label="Generate Retail Value"
        />
        <FormControlLabel
          control={<Checkbox checked={generateMarket} onChange={e => setGenerateMarket(e.target.checked)} inputProps={{ 'aria-label': 'Generate Market Value' }} />}
          label="Generate Market Value"
        />
        <FormControlLabel
          control={<Checkbox checked={generateLastSold} onChange={e => setGenerateLastSold(e.target.checked)} inputProps={{ 'aria-label': 'Create How Much the Last Sold For' }} />}
          label="Create How Much the Last Sold For"
        />
      </div>
    </Paper>
  );

  const JobsTable = () => (
    <Paper className="p-6 mb-8" elevation={2}>
      <div className="flex items-center justify-between mb-2">
        <Typography variant="h6" className="font-bold">Processing Jobs</Typography>
        <span className="text-xs text-gray-400">Last updated: 11:54:33 AM</span>
      </div>
      <TableContainer>
        <Table size="small" aria-label="processing jobs table">
          <TableHead>
            <TableRow>
              <TableCell>Job ID</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Images</TableCell>
              <TableCell>Status</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {mockJobs.map(job => (
              <React.Fragment key={job.id}>
                <TableRow hover tabIndex={0} aria-label={`Job ${job.id}`}> 
                  <TableCell>
                    <Tooltip title={job.id}>
                      <span>{job.id.slice(0, 8)}...</span>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{job.created}</TableCell>
                  <TableCell>{job.images}</TableCell>
                  <TableCell>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">{job.status}</span>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label={expandedJob === job.id ? 'Collapse job' : 'Expand job'}
                      onClick={() => handleExpandJob(job.id)}
                      size="small"
                    >
                      {expandedJob === job.id ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5} style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse in={expandedJob === job.id} timeout="auto" unmountOnExit>
                      <ImagesTable images={job.imagesData} />
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );

  // ImagesTable subcomponent
  const ImagesTable: React.FC<{ images: any[] }> = ({ images }) => {
    const [localStarredOnly, setLocalStarredOnly] = useState(false);
    const filteredImages = localStarredOnly
      ? images.filter(img => starredImages[img.id])
      : images;
    return (
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <Typography variant="subtitle1" className="font-semibold">Images</Typography>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Last updated: 11:55:20 AM</span>
            <FormControlLabel
              control={<Switch checked={localStarredOnly} onChange={e => setLocalStarredOnly(e.target.checked)} inputProps={{ 'aria-label': 'Starred Only' }} />}
              label={<span className="text-xs">Starred Only</span>}
            />
          </div>
        </div>
        <TableContainer>
          <Table size="small" aria-label="images table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" />
                <TableCell>Preview</TableCell>
                <TableCell>Timestamp</TableCell>
                <TableCell>Custom Number</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Retail Price</TableCell>
                <TableCell>Market Price</TableCell>
                <TableCell>Last Sold For</TableCell>
                <TableCell>Custom %</TableCell>
                <TableCell>Star</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredImages.map(img => (
                <TableRow key={img.id} hover tabIndex={0} aria-label={`Image ${img.id}`}> 
                  <TableCell padding="checkbox">
                    <Checkbox inputProps={{ 'aria-label': `Select image ${img.id}` }} />
                  </TableCell>
                  <TableCell>
                    <div className="w-12 h-12 relative rounded overflow-hidden">
                      <Image src={img.url} alt="preview" layout="fill" objectFit="cover" />
                    </div>
                  </TableCell>
                  <TableCell>{img.timestamp}</TableCell>
                  <TableCell>{img.customNumber || '-'}</TableCell>
                  <TableCell>{img.quantity ?? '-'}</TableCell>
                  <TableCell>{img.retailPrice !== undefined ? `$${img.retailPrice}` : '-'}</TableCell>
                  <TableCell>{img.marketPrice !== undefined ? `$${img.marketPrice}` : '-'}</TableCell>
                  <TableCell>{img.lastSoldFor !== undefined ? `$${img.lastSoldFor}` : '-'}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <TextField
                        type="number"
                        size="small"
                        variant="outlined"
                        inputProps={{ min: 0, max: 100, 'aria-label': `Custom percent for image ${img.id}` }}
                        value={customPercents[img.id] ?? ''}
                        onChange={e => handlePercentChange(img.id, Number(e.target.value))}
                        className="w-16"
                        placeholder="%"
                      />
                      <span className="text-xs text-gray-500">
                        {img.marketPrice && customPercents[img.id]
                          ? `$${((img.marketPrice * (customPercents[img.id] / 100)).toFixed(2))}`
                          : ''}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label={starredImages[img.id] ? 'Unstar image' : 'Star image'}
                      onClick={() => handleStarImage(img.id)}
                      size="small"
                    >
                      {starredImages[img.id] ? <Star className="text-yellow-500" /> : <StarBorder />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto py-8 px-2">
        <UploadSection />
        <JobsTable />
      </main>
    </div>
  );
};

export default AuctioneerAI; 